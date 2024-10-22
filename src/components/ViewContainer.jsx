import EducationView from "./EducaitonView";
import PersonalView from "./PersonalView";

function ViewContainer({ personalState, educations }) {
  return (
    <div className="view-container">
      <PersonalView personalState={personalState} />

      <div>
        {Object.entries(educations).map(([key, edu]) => (
          <EducationView key={key} school={edu.school} degree={edu.degree} />
        ))}
      </div>
    </div>
  );
}

export default ViewContainer;
