import {
  Button,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead
} from "@repo/ui-web";

const results = [
  {
    event: "Luzon Finals",
    date: "Sep 12, 2026",
    winner: "Manila Titans",
    runnerUp: "QC Bolts",
    score: "82 - 76",
  },
  {
    event: "Independence Cup",
    date: "Jun 12, 2026",
    winner: "Davao Dolphins",
    runnerUp: "Iloilo Sharks",
    score: "94 - 91",
  },
  {
    event: "Summer Classic",
    date: "Apr 5, 2026",
    winner: "Cebu Centurions",
    runnerUp: "Manila Titans",
    score: "71 - 68",
  },
];

export function ResultsTable() {
  return (
    <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Event</TableHead>
      <TableHead>Winner</TableHead>
      <TableHead>Runner Up</TableHead>
      <TableHead>Score</TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {results.map((item) => (
      <TableRow key={item.event}>
        <TableCell>
          <div className="font-semibold">{item.event}</div>
          <div className="text-sm text-muted-foreground">
            {item.date}
          </div>
        </TableCell>

        <TableCell>{item.winner}</TableCell>

        <TableCell>{item.runnerUp}</TableCell>

        <TableCell className="font-semibold text-primary">
          {item.score}
        </TableCell>

        <TableCell>
          <Button variant="ghost" size="sm">
            Report
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
  );
}