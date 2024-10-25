import Input from "./input";
import Accordion from "./Accordion";
import Button from "./button";
import bin from "../../assets/bin.png";

function Experience({ id, experienceState, setExperience }) {
  function updateHandler(field, value) {
    const updatedValue = {
      ...experienceState,
      [field]: value,
    };
    setExperience((prev) => ({
      ...prev,
      [id]: updatedValue,
    }));
  }

  function deleteExp() {
    setExperience((prev) => {
      const { [id]: _, ...updatedExperience } = prev;

      return updatedExperience;
    });
  }
  return (
    <Accordion title={experienceState.company}>
      <div className="section">
        <Input
          label="Compnay"
          field="company"
          value={experienceState.company}
          setValue={updateHandler}
        />
        <Input
          label="Designation"
          field="designation"
          value={experienceState.designation}
          setValue={updateHandler}
        />
        <div className="pair-input">
          <Input
            label="Start Date"
            field="startDate"
            value={experienceState.startDate}
            setValue={updateHandler}
          />
          <Input
            label="End Date"
            field="endDate"
            value={experienceState.endDate}
            setValue={updateHandler}
          />
        </div>
        <Input
          label="Location"
          field="location"
          value={experienceState.location}
          setValue={updateHandler}
        />
        <Input
          label="Description"
          field="description"
          value={experienceState.description}
          setValue={updateHandler}
        />

        <Button label={bin} onClick={deleteExp} logo={true} />
      </div>
    </Accordion>
  );
}

export default Experience;
