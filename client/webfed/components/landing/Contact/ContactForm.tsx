import {
  Button,
  Card,
  CardContent,
  Input,
  Label,
  Textarea,
} from "@repo/ui-web";

export function ContactForm() {
  return (
    <Card>

      <CardContent className="space-y-6 p-8">

        <div>

          <Label htmlFor="name">
            Full Name
          </Label>

          <Input
            id="name"
            placeholder="Enter your full name"
          />

        </div>

        <div>

          <Label htmlFor="email">
            Email Address
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
          />

        </div>

        <div>

          <Label htmlFor="subject">
            Subject
          </Label>

          <Input
            id="subject"
            placeholder="Subject"
          />

        </div>

        <div>

          <Label htmlFor="message">
            Message
          </Label>

          <Textarea
            id="message"
            rows={6}
            placeholder="Write your message..."
          />

        </div>

        <Button className="w-full">
          Send Message
        </Button>

      </CardContent>

    </Card>
  );
}