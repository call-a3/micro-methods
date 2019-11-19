import { decorator, Problem } from 'micro-problems/lib/method-not-allowed'

export default function serveMethods(methods) {
  const supported = Object.keys(methods)
  return decorator(function respondToMethod(req, res) {
    const requested = req.method
    if (!supported.includes(requested)) {
      throw new Problem(null, { supported, requested })
    }
    return methods[requested](req, res)
  })
}
