from pathlib import Path

# =================== INPUT MODIFICATIONS =========================

path = "../pyramidGenerator"  #UPDATE NEEDED HERE.
fileName = path + "/README.md"  # CREATE README.md file before running this script.

title = "Learn Introductory JavaScript by Building a Pyramid Generator"  # UPDATE NEEDED HERE

nSteps = 118  # UPDATE NEEDED HERE

# ================ PROCESS ========================

file = open(fileName, "w")

file.write("# " + title + 2*"\n")

for i in range(1, nSteps + 1):
    src = f"script_step{i}.js"
    text = f"""## Step{i}:

Step{i} description

**Source file link:** [{src}](./{src})

;;;{src};;;

### Execution logs: 

```

```

---

"""
    file.write(text)

    Path(f"{path}/{src}").touch()

file.close()