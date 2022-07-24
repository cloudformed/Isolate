import isolate from './isolate'

export default {
  fetch: async (req, env, ctx) => {
    
    const enrichedRequest = req.clone()
    
    try {
      const response = await isolate.fetch(enrichedRequest, env, ctx)
    }
    catch(err) {
     ctx.waitUntil() 
      return new Response(500)
    }
    
    return response
    
  }
}
