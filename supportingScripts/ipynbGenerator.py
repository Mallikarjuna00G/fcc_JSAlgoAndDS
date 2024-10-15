import nbformat
from pathlib import Path

jnb = nbformat.NotebookNode()

jnb['nbformat'] = 4
jnb['nbformat_minor'] = 2

jnb['metadata'] = {
    "kernelspec": {
        "display_name": "Python 3",
        "language": "python",
        "name": "python3"
    },
    "language_info": {
        "codemirror_mode": {
            "name": "ipython",
            "version": 3
        },
        "file_extension": ".py",
        "mimetype": "text/x-python",
        "name": "python",
        "nbconvert_exporter": "python",
        "pygments_lexer": "ipython3",
        "version": "3.11.2"
    }
}

jnb['cells'] = []

cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=["from IPython.display import display, Markdown, HTML, Image"])
jnb['cells'].append(cell)

projectTitle = "# " + "Title of the project"
projectName = "pyramidGenerator"
number_of_steps = 4
projectPath = "../" + projectName

cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{projectTitle}"])
jnb['cells'].append(cell)


for i in range(1, number_of_steps + 1):
    srcFileName = f"{projectName}_step{i}.js"

    Path(f"{projectPath}/{srcFileName}").touch()

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"## Step{i}:", "\n", "\n", "\n", f"**Source file link:** [{srcFileName}](./{srcFileName})", "\n", "\n"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=["code = \"\"\n", f"fileName = \"{srcFileName}\"\n", "\n", "with open(fileName, \"r\") as file:", "\tcode = file.read()", "\n", "display(Markdown(f\"\"\"```js\n{code}\n```\"\"\"))"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=[f"!node {srcFileName}"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"### Execution logs: ", "\n"])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"---", "\n"])
    jnb['cells'].append(cell)



fname = f"{projectPath}/{projectName}.ipynb"

with open(fname, 'w') as f:
    nbformat.write(jnb, f)