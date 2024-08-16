# Brainfuck by GitHub Actions

Brainfuck interpreter implemented with GitHub Actions.

## Usage

Fire the `entrypoint.yaml` workflow with the event `workflow_dispatch`. As input, give a Brainfuck program and standard input.

## Limitations

Due to technical issues, `.` and `/` are not supported as character that can be accepted as standard input.

## A Brainfuck program has gone into an infinite loop!

Run `stop_all_workflow.sh`.

## For more details

See the article "[GitHub Actions はチューリング完全](https://zenn.dev/cybozu_ept/articles/github-actions-is-turing-complete)" (written in Japanese).
