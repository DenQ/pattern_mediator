class MemberB extends IMember

  __mediator: null


  setMediator:(mediator) ->
    @__mediator = mediator
    @__mediator.send @, 'add B'
    return

  notify:(sender, msg) ->
    console.log 'notify B', msg
    return