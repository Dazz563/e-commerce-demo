import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';
import redisClient from '../utils/connectRedis';

/**
 * The express-rate-limit middleware you're using internally handles the blocking and releasing of requests, so you don't need to explicitly call next().
 * The middleware provides request-specific properties that you can use to access information about the rate limiting process. Here are a few properties you might find useful:
 *
 * const rateLimitInfo = res.locals.rateLimit;
 * console.log(`Limit: ${rateLimitInfo.limit}`);
 * console.log(`Current: ${rateLimitInfo.current}`);
 * console.log(`Remaining: ${rateLimitInfo.remaining}`);
 * console.log(`Reset Time: ${new Date(rateLimitInfo.resetTime).toLocaleTimeString()}`);
 */

export const loginlimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 7, // Limit each IP to 7 requests per windowMs (15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers

	store: new RedisStore({
		sendCommand: (...args: string[]) => redisClient.sendCommand(args),
	}),
});
