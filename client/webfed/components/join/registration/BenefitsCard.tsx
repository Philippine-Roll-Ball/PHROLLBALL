import {
  Card,
  CardContent,
  H3,
} from "@repo/ui-web";

export function BenefitsCard() {
  return (
    <Card>

      <CardContent className="space-y-5 p-8">

        <H3>
          Member Benefits
        </H3>

        <ul className="space-y-3">

          <li>✔ Accident Insurance</li>

          <li>✔ League Eligibility</li>

          <li>✔ Official PRBA ID</li>

          <li>✔ Training Programs</li>

          <li>✔ Tournament Registration</li>

        </ul>

      </CardContent>

    </Card>
  );
}