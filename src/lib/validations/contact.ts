import { z } from "zod";
import { CONTACT_SERVICES } from "@/lib/constants";

/**
 * Contact Form 입력값 검증.
 *
 * 필수: name, phone, email, service, message
 * 선택: companyName, websiteUrl, budget, desiredDate
 *
 * ERD.md(ContactInquiry.service NOT NULL, companyName NULL)와
 * CLAUDE.md 15절 기준을 따른다. PRD.md 11절 표는 companyName을 필수,
 * service를 선택으로 적어 두 문서와 다르므로 필요 시 확인 후 조정한다.
 */
export const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "이름을 입력해주세요.").max(100),
  companyName: z
    .string()
    .trim()
    .max(255)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  phone: z
    .string()
    .trim()
    .min(1, "연락처를 입력해주세요.")
    .max(50),
  email: z.email("올바른 이메일 형식이 아닙니다.").max(255),
  websiteUrl: z
    .string()
    .trim()
    .max(2048)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  service: z.enum(CONTACT_SERVICES, {
    error: "문의 서비스를 선택해주세요.",
  }),
  budget: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  desiredDate: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  message: z.string().trim().min(1, "문의 내용을 입력해주세요.").max(4000),
});

export type ContactInquiryInput = z.infer<typeof contactInquirySchema>;
