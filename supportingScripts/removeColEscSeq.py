import fileinput

projectName = "gradeBookApp"  # UPDATE HERE
projectPath = "../" + projectName

lookFor = [
    "[30m",
    "[31m",
    "[32m",
    "[33m",
    "[34m",
    "[35m",
    "[36m",
    "[37m",
    "[38m",
    "[39m",
    "[90m",
]

with fileinput.input(f"{projectPath}/README.md", inplace=True) as file:
    for line in file:
        for i in lookFor:
            line = line.replace(i, "")
        print(line, end='')
