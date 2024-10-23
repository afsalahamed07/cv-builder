import Input from "./input";
import Accordion from "./Accordion";

function Education({ id, educationState, setEducations }) {
  function updateHandler(field, value) {
    const updatedValue = {
      ...educationState,
      [field]: value,
    };
    setEducations((prev) => ({
      ...prev,
      [id]: updatedValue,
    }));
  }

  console.log(educationState);

  return (
    <Accordion title={educationState.school}>
      <div className="section">
        <Input
          label="School"
          field="school"
          value={educationState.school}
          setValue={updateHandler}
        />
        <Input
          label="Degree"
          field="degree"
          value={educationState.degree}
          setValue={updateHandler}
        />
        <div className="pair-input">
          <Input
            label="Start Date"
            field="startDate"
            value={educationState.startDate}
            setValue={updateHandler}
          />
          <Input
            label="End Date"
            field="endDate"
            value={educationState.endDate}
            setValue={updateHandler}
          />
        </div>
        <Input
          label="Location"
          field="location"
          value={educationState.location}
          setValue={updateHandler}
        />
      </div>
    </Accordion>
  );
}

export default Education;
