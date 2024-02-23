import AllRounder from "@/assets/svgs/mbti-result/all-rounder.svg"
import Avengers from "@/assets/svgs/mbti-result/avengers.svg"
import BrainStormers from "@/assets/svgs/mbti-result/brain-stormers.svg"
import Energizer from "@/assets/svgs/mbti-result/energizer.svg"
import EQGenius from "@/assets/svgs/mbti-result/eq-genius.svg"
import IdeaBank from "@/assets/svgs/mbti-result/idea-bank.svg"
import Orchestra from "@/assets/svgs/mbti-result/orchestra.svg"
import WorldExplorer from "@/assets/svgs/mbti-result/world-explorer.svg"

const dataset = [
  {
    title: "아이디어뱅크",
    descriptions: [
      "창의적이고 혁신적인 아이디어 공유하는 조합이네요!",
      "다양한 분야에서 영감을 얻고, 그것들을 조합하여 새로운 아이디어를 만들어내기 좋아요.",
    ],
    suggestion: "실현 가능한 아이디어를 구체화 시켜보는 것은 어떨까요?",
    TitleImage: IdeaBank,
  },
  {
    title: "오케스트라",
    descriptions: [
      "자유롭게 표현하고 창의적으로 작업할 수 있는 분위기에서 잠재력을 발휘하는 조합!",
      "다양성을 존중하고 여러 관점을 수용하는 것을 선호하는 팀이에요.",
    ],
    suggestion: "비판을 받아들이고 갈등을 해결하는 방법을 배우는 것이 도움이 될 수 있어요.",
    TitleImage: Orchestra,
  },
  {
    title: "에너자이저",
    descriptions: [
      "새로운 경험을 통해 자신의 아이디어를 발전시키고 성장하는 조합이네요!",
      "전문성과 배경을 가진 팀원들과의 협업을 통해 다양한 시각과 아이디어를 만드는군요.",
    ],
    suggestion: "명확하고 구체적인 목표와 일정을 설정하여 프로젝트를 진행해보는 게 어떨까요?",
    TitleImage: Energizer,
  },
  {
    title: "어벤져스",
    descriptions: [
      "프로젝트 일정을 잘 조직하여 생산성을 높이고 목표를 달성하는 리더들이 모인 조합!",
      "책임감이 강하고, 효율적으로 일을 처리하는 것을 좋아하는군요.",
    ],
    suggestion: "최대한 팀원들의 의견을 존중하고 공동의 목표 달성을 위해 협력하는 것은 어떨까요?",
    TitleImage: Avengers,
  },
  {
    title: "EQ 천재",
    descriptions: [
      "자신의 노력과 업무가 조직의 목표에 기여하는 것을 중요하게 여기는 조합!",
      "명확한 업무 지시와 기대치를 제공하는 곳에서 천재성을 발휘해요.",
    ],
    suggestion: "자신의 의견을 내세워도 괜찮아요! 자신감을 가지고 표현한다면 더 좋은 결과를 부를거에요.",
    TitleImage: EQGenius,
  },
  {
    title: "브레인 스토머스",
    descriptions: [
      "목표를 위해 논리적으로 분석하고 계획을 세우며, 효율적으로 실행하는 조합!",
      "흥미로운 아이디어를 탐구하고 혁신적인 해결책을 모색할 수 있는 도전적인 프로젝트를 좋아하는군요.",
    ],
    suggestion: "다양한 관점을 존중하며 새로운 아이디어에 개방적으로 대한다면 더 좋은 결과가 나올거에요.",
    TitleImage: BrainStormers,
  },
  {
    title: "만능 일잘러",
    descriptions: [
      "즉흥적이고 유연하며, 실제적인 해결책을 찾아내는 데 탁월한 조합이에요!",
      "간결하고 명확한 의사 소통을 선호해 따라서 실용적이고 직접적인 소통으로 일하는 타입이네요.",
    ],
    suggestion: "계획을 세우고 관리하는 방법을 연습한다면 더 좋은 협업이 될 수 있을거에요.",
    TitleImage: AllRounder,
  },
  {
    title: "세계 탐험가",
    descriptions: [
      "분석적이고 창의적인 성향을 가지고 있으며, 복잡한 문제를 해결하는 데 뛰어난 능력을 발휘하는 조합!",
      "독립적이며 자기 주도적으로 일하며, 새로운 아이디어나 해결책을 모색하는 것을 즐기는군요.",
    ],
    suggestion:
      "아이디어에 몰두하고 있지는 않나요? 목표 설정에 초점을 두고 계획을 세운다면 더 좋은 협업이 될 수 있어요.",
    TitleImage: WorldExplorer,
  },
]

export function getRandomData() {
  const randomIndex = Math.floor(Math.random() * dataset.length)

  return dataset[randomIndex]
}
