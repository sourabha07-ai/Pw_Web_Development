#!/bin/bash

# echo "Enter Project name:"
# read project
# echo "Project name is: $project"

#! Better way read -p

read -p "Enter Project name: " project

echo "Creating $project..."

mkdir "$project"

echo "$project created Successfully"

