import LottieWrapper from "components/Common/LottieWrapper";
import bgLottieData from "assets/lottieJSON/hello.json";

function HelloLottie() {
  return (
    <div>
      <LottieWrapper lottieData={bgLottieData} />
    </div>
  );
}

export default HelloLottie;