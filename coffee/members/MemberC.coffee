class MemberC extends IMember

  __mediator: null

  setMediator:(mediator) ->
    @__mediator = mediator
    return

  notify:(sender, msg) ->
    console.log sender, msg
