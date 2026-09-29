# project="CollegeDB"
# mkdir $project

# Build your previous project dynamically

#!/bin/bash

project="MyApp"

mkdir $project
mkdir $project/src
mkdir $project/test

touch $project/src/index.js
touch $project/src/app.js
touch $project/test/app.test.js
touch $project/README.md

echo "$project created successfully!"