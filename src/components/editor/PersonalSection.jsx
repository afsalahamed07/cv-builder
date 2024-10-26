import Input from "./Input";
import Accordion from "./Accordion";

function PersonalSection({ personalState, setPersonal }) {
  function updatePersonal(field, value) {
    setPersonal((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <Accordion title="Personal" open={true}>
      <div className="section personal-section">
        <div className="pair-input">
          <Input
            label="First Name"
            field="firstName"
            value={personalState.firstName}
            setValue={updatePersonal}
          />
          <Input
            label="Last Name"
            field="lastName"
            value={personalState.lastName}
            setValue={updatePersonal}
          />
        </div>
        <Input
          label="Email"
          field="email"
          value={personalState.email}
          setValue={updatePersonal}
        />
        <Input
          label="Phone Number"
          field="phone"
          value={personalState.phone}
          setValue={updatePersonal}
        />
        <Input
          label="Address"
          field="address"
          value={personalState.address}
          setValue={updatePersonal}
        />
      </div>
    </Accordion>
  );
}

export default PersonalSection;
