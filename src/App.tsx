import { SampleCard } from "./application/widgets/sample-card/SampleCard";
import ReactLogo from "./application/assets/react.svg";

export const App = () => {
  return (
    <>
      <SampleCard />
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={ReactLogo}
          style={{
            height: "1em",
            paddingRight: "0.5em",
          }}
        />
        <p> This project is built using React and Vite </p>
      </footer>
    </>
  );
};
