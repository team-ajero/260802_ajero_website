"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { submitContactInquiry, type ContactFormState } from "@/app/contact/actions";
import { CONTACT_SERVICE_LABEL, CONTACT_SERVICES } from "@/lib/constants";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "전송 중..." : "상담 신청하기"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactInquiry, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-lg border border-border bg-muted px-6 py-16 text-center"
      >
        <h3 className="text-h3 font-semibold text-foreground">
          문의가 접수되었습니다.
        </h3>
        <p className="text-body text-muted-foreground">
          빠른 시일 내에 남겨주신 연락처 또는 이메일로 답변드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate>
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(state.fieldErrors?.name)}>
            <FieldLabel htmlFor="name">이름 *</FieldLabel>
            <Input
              id="name"
              name="name"
              required
              autoComplete="name"
              aria-invalid={Boolean(state.fieldErrors?.name)}
            />
            <FieldError>{state.fieldErrors?.name}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.companyName)}>
            <FieldLabel htmlFor="companyName">회사명</FieldLabel>
            <Input
              id="companyName"
              name="companyName"
              autoComplete="organization"
              aria-invalid={Boolean(state.fieldErrors?.companyName)}
            />
            <FieldError>{state.fieldErrors?.companyName}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.phone)}>
            <FieldLabel htmlFor="phone">연락처 *</FieldLabel>
            <Input
              id="phone"
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              placeholder="010-0000-0000"
              aria-invalid={Boolean(state.fieldErrors?.phone)}
            />
            <FieldError>{state.fieldErrors?.phone}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.email)}>
            <FieldLabel htmlFor="email">이메일 *</FieldLabel>
            <Input
              id="email"
              name="email"
              required
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(state.fieldErrors?.email)}
            />
            <FieldError>{state.fieldErrors?.email}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.websiteUrl)}>
            <FieldLabel htmlFor="websiteUrl">현재 홈페이지 URL</FieldLabel>
            <Input
              id="websiteUrl"
              name="websiteUrl"
              type="url"
              placeholder="https://"
              aria-invalid={Boolean(state.fieldErrors?.websiteUrl)}
            />
            <FieldError>{state.fieldErrors?.websiteUrl}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.service)}>
            <FieldLabel htmlFor="service">원하는 서비스 *</FieldLabel>
            <Select name="service" required>
              <SelectTrigger id="service" className="w-full">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                {CONTACT_SERVICES.map((service) => (
                  <SelectItem key={service} value={service}>
                    {CONTACT_SERVICE_LABEL[service]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError>{state.fieldErrors?.service}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.budget)}>
            <FieldLabel htmlFor="budget">예상 예산</FieldLabel>
            <Input
              id="budget"
              name="budget"
              placeholder="예: 300만원 ~ 500만원"
              aria-invalid={Boolean(state.fieldErrors?.budget)}
            />
            <FieldError>{state.fieldErrors?.budget}</FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.desiredDate)}>
            <FieldLabel htmlFor="desiredDate">희망 일정</FieldLabel>
            <Input
              id="desiredDate"
              name="desiredDate"
              placeholder="예: 2026년 10월 오픈 희망"
              aria-invalid={Boolean(state.fieldErrors?.desiredDate)}
            />
            <FieldError>{state.fieldErrors?.desiredDate}</FieldError>
          </Field>
        </div>

        <Field data-invalid={Boolean(state.fieldErrors?.message)}>
          <FieldLabel htmlFor="message">문의 내용 *</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="현재 상황과 필요하신 내용을 편하게 남겨주세요. 아직 구체적인 계획이 없어도 괜찮습니다."
            aria-invalid={Boolean(state.fieldErrors?.message)}
          />
          <FieldError>{state.fieldErrors?.message}</FieldError>
        </Field>

        {state.status === "error" && state.message && (
          <p role="alert" className="text-small text-destructive">
            {state.message}
          </p>
        )}

        <SubmitButton />
      </FieldGroup>
    </form>
  );
}
