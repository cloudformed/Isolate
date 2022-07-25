import isolate from './isolate'

recentInteractions = {}

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

// const rate = {
//   limit: 60,
//   remaining: 60 - recentInteractions[ip],
//   reset: 1658740147,
//   used: 2,
// }
