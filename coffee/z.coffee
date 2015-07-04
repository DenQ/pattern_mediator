###
  context
###
memberA = new MemberA()
memberB = new MemberB()
memberC = new MemberC()

mediator = new Mediator()

mediator.add memberA
mediator.add memberB
mediator.add memberC

memberC.send