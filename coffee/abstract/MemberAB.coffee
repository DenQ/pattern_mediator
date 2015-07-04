class AbMember extends IMember

  __mediator: null
  __name: null

  setMediator:(mediator) ->
    @__mediator = mediator
    @send "add #{@__name}"
    return

  notify:(sender, msg) ->
    console.log "notify #{@__name}", msg
    return

  send:(msg)->
    @__mediator.send @, msg
    return