"use server";

import { db } from "@/index";
import { contactInquiryTable } from "@/db/schema";
import { contactInquirySchema } from "@/lib/validations/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
};

export async function submitContactInquiry(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    companyName: formData.get("companyName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    websiteUrl: formData.get("websiteUrl"),
    service: formData.get("service"),
    budget: formData.get("budget"),
    desiredDate: formData.get("desiredDate"),
    message: formData.get("message"),
  };

  const parsed = contactInquirySchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<string, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }

    return {
      status: "error",
      message: "입력 내용을 다시 확인해주세요.",
      fieldErrors,
    };
  }

  try {
    await db.insert(contactInquiryTable).values(parsed.data);
  } catch (error) {
    // 사용자에게는 내부 에러를 노출하지 않고, 서버 로그에만 상세 내용을 남긴다.
    console.error("[submitContactInquiry] failed to save inquiry", error);
    return {
      status: "error",
      message: "문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
    };
  }

  return { status: "success" };
}
