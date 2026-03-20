# PH-ROLL-BALL-ENTITIES

## Entities necessary for the project. This includes the main entities.

## Properties of the Entities

### Player (Managed by Admin, Coach)
- PlayerID (Primary)
- Password (Required)
- Email (Required)
- BirthDate (Required)
- ContactNumber (Required)
- FullName (Required)
- FirstName (derived from FullName)
- MiddleName (derived from FullName)
- LastName (derived from FullName)
- Suffix (Optional)
- Birthday (Required)
- Educational Attainment (Required)
- ProfileImage (Required after registration)
- Occupation (Optional)
- OtherSports (Optional)
- Role (Required)
- DateRegistered
- Team (derived from Team)


### Admin
- Username
- Password
- Email

### Coach (Managed by Admin)
- CoachID (Primary)
- Password (Required)
- Email (Required)
- Birthday (Required)
- ContactNumber (Required)
- FullName (Required)
- FirstName (derived from FullName)
- MiddleName (derived from FullName)
- LastName (derived from FullName)
- Suffix (Optional)
- Birthday (Required)
- Educational Attainment (Required)
- ProfileImage (Required after registration)
- Occupation (Optional)
- OtherSports (Optional)
- Role (Required)
- DateRegistered
- TeamAssigned (derived from Team)


### Team (Managed by Coach, Admin)
- TeamID (Primary)
- CoachID (Foreign)
- PlayerList (Derived using PlayerID (Foreign))
- DateCreated
- Wins (Optional)
- Losses (Optional)
- Matches (Optional)
- TeamScore
- FoulNumber

### Match
- MatchID (Primary)
- Teams (Foreign)
- Result (Required)
- MatchDate (Required)
- Duration (Required)


### Tournament
- TournamentID (Primary)
- DateCreated (Required)
- Duration (Required)
- Location (Required)

### TournamentTeams (Junction Table)
- TeamID (Foreign)
- TournamentID (Foreign)
- TeamStanding (Required)


### MatchTeams (Juction Table) 
- MatchID (Foreign) 
- TeamID (Foreign)
- Score (Required)
