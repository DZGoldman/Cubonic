# Cubonic Readme
Cubonic is a visual logic puzzle build on the Ruby on Rails stack. Users can attempt to solve puzzles, and can also create their own and post them for other's to attempt.

### Installation Instructions

1. git fork this repo
2. Enter the repository, and run:
```console
bundle install
```
3. Run postgres and enter the rails server
4. visit url 'localhost:3000'
### Approach

I tend to find the strict structure of the Rails framework limiting and frustrating, so my approach for this project was to push it's built in technologies in interesting directions, without relying on additional gems. Thus, the gameplay of the puzzles themselves relies entirely on JQuery in the apps javasript assets, and the 3-dimensional cube transformation are done solely with vanilla css. To save new puzzles into the database, they are encrypted as strings, and decrypted to be put back on the boards. The minuturized puzzle icons are built when the page loads out of html elements.

### Technologies Used
- Ruby on Rails
- PSQL
- BCrypt
- JQuery
- Bootstrap
- HTML/CSS


### Models
**Users:** Created at a sign up page, and the users session is tracked until the user logs out. Each user references their created puzzles and solved puzzles.

**Puzzles:** Includes the level puzzles, created by the Administrator (me), and the user created puzzles. Puzzles reference their creator.

**Wins:** Join table of Puzzles and Users, stores each instance of a "Win," which are displayed on the users profile page.


### Biggest Challenges
- Routing Puzzle Data
- miniaturized Grids
- Dynamic Cube Gameplay


### Special Thanks To...
- The WDI intructors Will, Zhen, Adam, and especially Jason, for claiming that I "accidentally rediscovered bitmapping", which I can only assume is an exaggeration, but certainly sounds impressive.
- For offhandedly mentioning cubes, sending the project in an entirely new direction.
- desanddro for this 3dtramsforms guide https://github.com/desandro/3dtransforms


Added in Project 2.0:
- Full refactor with cubes, including decreasing grids to 9x9
- Full style revamp with Bootstral
- All minigrids succssfully displaying
- Improved Winning (no more repeats, keeps track of last winner, etc)
- Single player mode with 10 levels (generating puzzles moved to side-feature), which route to level page upon winning
- Sweet Logo
