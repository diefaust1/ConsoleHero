
function handler(req: Request): Response {
  
  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",        // or your frontend origin
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });

  console.log("Method: " + req.method);
  console.log("URL: " + req.url);
  
  if(req.method == "POST"){
    console.log("Post success");
    return new Response("Send Data", {headers});
  }
  return new Response("GET Request", {headers});
}

Deno.serve({ port: 4000 },handler);