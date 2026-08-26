export type ProcessStep = {
  order: string;
  title: string;
  description: string;
};

/**
 * PRD.md 6.7절(제작 프로세스)과 9절(Process Page)을 기준으로 작성했다.
 * 정적 콘텐츠이므로 DB가 아닌 코드로 관리한다. (docs/ERD.md 8절)
 */
export const processSteps: ProcessStep[] = [
  {
    order: "01",
    title: "Consultation",
    description:
      "고객의 사업과 현재 겪고 있는 문제를 먼저 파악합니다. 어떤 고객이 찾아오길 원하는지, 지금 홈페이지의 어떤 점이 아쉬운지부터 이야기를 나눕니다.",
  },
  {
    order: "02",
    title: "Planning",
    description:
      "상담 내용을 바탕으로 요구사항을 정리하고, 페이지 구조와 기능, 사용자 흐름을 설계합니다.",
  },
  {
    order: "03",
    title: "Design",
    description:
      "브랜드와 고객의 목적에 맞게 UI/UX를 설계합니다. 화려함보다 정보 전달력과 신뢰감을 우선합니다.",
  },
  {
    order: "04",
    title: "Development",
    description:
      "설계된 디자인을 실제 웹 서비스로 구현합니다. 반응형 대응과 기본 성능 최적화를 함께 진행합니다.",
  },
  {
    order: "05",
    title: "Launch",
    description:
      "충분한 검수 후 실제 서비스를 배포합니다. 배포 이후에도 정상 동작 여부를 확인합니다.",
  },
  {
    order: "06",
    title: "Growth",
    description:
      "유지보수, SEO, 콘텐츠, 기능 개선 등을 통해 오픈 이후에도 홈페이지가 계속 성장할 수 있도록 관리합니다.",
  },
];

export const clientPreparationItems: string[] = [
  "회사 소개",
  "로고",
  "사진",
  "서비스 정보",
  "연락처",
  "사업장 정보",
  "참고하고 싶은 홈페이지",
];
