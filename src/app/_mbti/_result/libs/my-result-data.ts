import WorkingStyle from "@/assets/images/mbti-result/working-style.png"
import FirstPlace from "@/assets/svgs/mbti-result/first-place.svg"
import Fixer from "@/assets/svgs/mbti-result/fixer.svg"
import Leader from "@/assets/svgs/mbti-result/leader.svg"
import Manager from "@/assets/svgs/mbti-result/manager.svg"
import ProblemSolver from "@/assets/svgs/mbti-result/problem-solver.svg"
import Sherpa from "@/assets/svgs/mbti-result/sherpa.svg"
import YouRight from "@/assets/svgs/mbti-result/you-right.svg"

const dataset = [
  {
    title: "핵인싸 워킹 메이트",
    TitleImage: WorkingStyle,
    tag1: "에너지",
    tag2: "커뮤니케이션",
    tag3: "분위기메이커",
    descriptions: [
      "직장 내 분위기메이커일 확률이 높아요.",
      "적극적이고 주도적으로 업무를 진행해요.",
      "모든 동료와 좋은 관계를 유지하는 비타민같은 존재!",
    ],
    suggestion: "계획을 세우고 일의 우선순위를 정해보는 것은 어떨까요?",
    partner1Image: Sherpa,
    partner1Text: "철두철미한 셰르파",
    partner2Image: FirstPlace,
    partner2Text: "전략에 강한 만년 1등",
  },
  {
    title: "반박시 니말이 맞음",
    TitleImage: YouRight,
    descriptions: [
      "문제의 본질을 파악하고 논리적이에요.",
      "도전을 두려워하지 않아요.",
      "많은 사람들 사이에서 거리낌 없이 자신의 의견을 말해요!",
    ],
    suggestion: "팀원들에게 배려의 자세로 대화를 이어가는 것이 필요해요.",
    partner1Image: FirstPlace,
    partner1Text: "전략에 강한 만년 1등",
    partner2Image: Fixer,
    partner2Text: "끝내주는 해결사",
  },
  {
    title: "끝내주는 해결사",
    TitleImage: ProblemSolver,
    tag1: "인싸력 100%",
    tag2: "문제 해결사",
    tag3: "설득력",
    descriptions: [
      "아이디어를 뒷받침하는 설득력이 높아요.",
      "인맥 스펙트럼이 넓어요.",
      "누구보다 자신의 생각에 대한 실행력이 높아요!",
    ],
    suggestion: "나무가 아닌 숲을 보는 연습을 할 필요가 있어요.",
    partner1Image: Sherpa,
    partner1Text: "철두철미한 셰르파",
    partner2Image: FirstPlace,
    partner2Text: "전략에 강한 만년 1등",
  },
  {
    title: "확신의 리더상",
    TitleImage: Leader,
    tag1: "알잘딱깔센",
    tag2: "책임감",
    tag3: "추진력",
    descriptions: ["적극적이고 용감한 성격을 갖고있어요.", "강한 리더십을 갖고있어요.", "알잘딱깔센의 실사화!"],
    suggestion: "팀원들의 의견을 귀기울이면 더 좋은 결과를 맞이할지도 몰라요.",
    partner1Image: FirstPlace,
    partner1Text: "전략에 강한 만년 1등",
    partner2Image: YouRight,
    partner2Text: "반박시 니말이 맞음",
  },
  {
    title: "전지적 참견시점 매니저",
    TitleImage: Manager,
    tag1: "눈치왕",
    tag2: "의사소통",
    tag3: "조력자",
    descriptions: [
      "눈치가 빠르고 의사소통 능력이 뛰어나요.",
      "조용히 팀원을 생각하는 숨은 조력자.",
      "자신이 맡은 일에 책임감이 강해요!",
    ],
    suggestion: "거절은 무례가 아닙니다!",
    partner1Image: Sherpa,
    partner1Text: "철두철미한 셰르파",
    partner2Image: FirstPlace,
    partner2Text: "전략에 강한 만년 1등",
  },
  {
    title: "철두철미한 셰르파",
    TitleImage: Sherpa,
    tag1: "통찰력",
    tag2: "독립적",
    tag3: "공과사구분",
    descriptions: [
      "날카로운 통찰력을 갖고있어요.",
      "독립적이고 객관적이며 공과 사의 구분이 철저해요.",
      "자신의 감정에 잘 휘둘리지 않아요!",
    ],
    suggestion: "효율적인 것은 물론 좋지만 효율적인 것이 세상 모든 일의 답은 아닙니다.",
    partner1Image: Manager,
    partner1Text: "전지적 참견시점 매니저",
    partner2Image: YouRight,
    partner2Text: "반박시 니말이 맞음",
  },
  {
    title: "겉바속촉 문제 해결사",
    TitleImage: ProblemSolver,
    tag1: "현실적",
    tag2: "임기응변",
    tag3: "꼼꼼함",
    descriptions: [
      "현실적이고 임기응변에 강해요.",
      "압박이 있는 상황에서도 침착하게 대처해요.",
      "주변 상황을 세심하게 관찰하며 꼼꼼한 성격을 가지고 있어요!",
    ],
    suggestion: "목표 달성을 위해 계획을 세우고 인내심을 기를 필요가 있어요.",
    partner1Image: YouRight,
    partner1Text: "반박시 니말이 맞음",
    partner2Image: Sherpa,
    partner2Text: "철두철미한 셰르파",
  },
  {
    title: "전략에 강한 만년 1등",
    TitleImage: FirstPlace,
    tag1: "본질파악",
    tag2: "최선의 선택",
    tag3: "문제해결",
    descriptions: [
      "논리적인 사고로 복잡한 문제의 본질을 파악해요.",
      "자신의 선택에 대한 책임감이 강해요.",
      "꼼꼼한 성격을 가져 새로운 사고 방식과 문제 해결에 탁월해요!",
    ],
    suggestion: "다른 사람의 감정을 고려한다면 의사소통을 개선하고 더 나은 관계를 형성할 수 있어요.",
    partner1Image: Manager,
    partner1Text: "전지적 참견시점 매니저",
    partner2Image: Fixer,
    partner2Text: "끝내주는 해결사",
  },
]

export function getRandomData() {
  const randomIndex = Math.floor(Math.random() * dataset.length)

  return dataset[randomIndex]
}
