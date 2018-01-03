## A guide on how you *should* do Assignment 2

TL;DR
I've set everything up for you. [Simply fork the repository](https://confluence.atlassian.com/bitbucket/forking-a-repository-221449527.html) below and get coding.
[https://bitbucket.org/comp2521/dracula/overview](https://bitbucket.org/comp2521/dracula/overview)

I've also written about this before in more detail [here](https://medium.com/@al_hinds/til-pipelines-on-bitbucket-63b847785e4f) <-- check out if you want more depth.

## Briefly..
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
is the idea of running a pre-defined test suite on
all your git branch changes before you merge them.

Obviously you may do something similar to this already (ie check your code compiles),
but the nice thing about this system is it's much easier to
diagnose where you went wrong
(which push broke your application and when).

Why is this good? Well basically it drives you to write *compiling*,
test-passing code, **always**.

## How does CI work..
The bitbucket.yml file tells bitbucket (in this case, although many services offer
   some form of CI) how to compile, run and test your code. It does this on a linux
   machine somewhere in the cloud. If it fails, they'll let you know! Yay.

## The thing is...
In this Assignment we've already given you a bunch of tests
(by no means exhaustive).
In an ideal world we would've given you 0 tests,
and you'd build your test suite out
as you developed your code.

Because we've provided you with a few tests,
it may take you a little while to get your
bitbucket build passing.
If you're getting annoyed by this you can always comment
out the failing tests in the .yml file. As such:

```yml
image: gcc:6.1

pipelines:
  default:
    - step:
        script:
          - make
          #- ./testGameView
          #- ./testHunterView
          #- ./testDracView
```
