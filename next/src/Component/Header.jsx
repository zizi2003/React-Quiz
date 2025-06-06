import ImageLogo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={ImageLogo} alt="Quiz Logo" />
      <h2>ReactQuiz</h2>
    </header>
  );
}

export default Header;
