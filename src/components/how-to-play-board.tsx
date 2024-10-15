import HeaderWrapper from "./header-wrapper";
import IconButton from "./icon-button";
import Heading from "./heading";
import GameManual from "./game-manual";
import backIcon from "../assets/images/icon-back.svg";

export default function HowToPlayBoard() {
  return (
    <section className="grid w-full max-w-[324px] gap-20 py-4">
      <HeaderWrapper>
        <IconButton icon={backIcon} />
        <Heading>How to Play</Heading>
      </HeaderWrapper>

      <GameManual />
    </section>
  );
}
