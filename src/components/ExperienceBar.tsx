import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/component/ExperienceBar.module.css";

export function ExperienceBar() {
  const {currentXp, xpToNextLevel}=useContext(ChallengesContext);

  const percentToNextLevel= Math.round((currentXp *100)/xpToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}` }}>
          {currentXp}
        </span>
      </div>
      <span>{xpToNextLevel} xp</span>
    </header>
  );
}
