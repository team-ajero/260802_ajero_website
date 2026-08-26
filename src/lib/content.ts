export type ContentSection = {
  heading: string;
  paragraphs: string[];
};

/**
 * Portfolio.content는 `## 제목` 형태의 최소 마크다운으로 저장한다.
 * 별도 마크다운 라이브러리를 추가하지 않고, 필요한 만큼만 직접 파싱한다.
 */
export function parseContentSections(content: string): ContentSection[] {
  const blocks = content
    .split(/\n(?=## )/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block) => {
    const [headingLine, ...rest] = block.split("\n");
    const heading = headingLine.replace(/^##\s*/, "").trim();
    const paragraphs = rest
      .join("\n")
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    return { heading, paragraphs };
  });
}
