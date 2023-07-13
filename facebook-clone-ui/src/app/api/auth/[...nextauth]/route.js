import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export const OPTIONS = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
