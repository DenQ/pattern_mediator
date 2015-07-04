# pattern_mediator
Design pattern mediator

language: CoffeeScript
status: complete

UML diagram:
![Image alt](https://github.com/DenQ/pattern_mediator/raw/master/uml/pattern_mediator.png)

For run:
```
node js/app.js
```
Result for BuilderChocolateMilk:
```
notify: MemberA -> MemberA. msg: add MemberA
notify: MemberB -> MemberA. msg: add MemberB
notify: MemberB -> MemberB. msg: add MemberB
notify: MemberC -> MemberA. msg: add MemberC
notify: MemberC -> MemberB. msg: add MemberC
notify: MemberC -> MemberC. msg: add MemberC
```