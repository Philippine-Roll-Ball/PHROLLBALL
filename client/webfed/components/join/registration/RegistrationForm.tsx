import {
  Button,
  Card,
  CardContent,
  H2,
  Input,
  Label,
  Paragraph,
  Select,
} from "@repo/ui-web";

export function RegistrationForm() {
  return (
    <Card>
      <CardContent className="space-y-6 p-8">

        <div>
          <H2>Registration</H2>

          <Paragraph className="mt-2">
            Complete the form below to register with the Federation.
          </Paragraph>
        </div>

        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input placeholder="Juan Dela Cruz" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input type="date" />
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>

            <Select>
              <option>Male</option>
              <option>Female</option>
            </Select>

          </div>

        </div>

        <div className="space-y-2">

          <Label>Region</Label>

          <Select>
            <option>NCR</option>
            <option>Luzon</option>
            <option>Visayas</option>
            <option>Mindanao</option>
          </Select>

        </div>

        <Button className="w-full">
          Complete Registration
        </Button>

      </CardContent>
    </Card>
  );
}