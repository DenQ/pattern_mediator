class MemberA extends IMember

  __mediator: null

  setMediator:(mediator) ->
    @__mediator = mediator
    @send 'add A'
    return

  notify:(sender, msg) ->
    console.log 'notify A', msg
    return

  send:(msg)->
    @__mediator.send @, msg
    return
