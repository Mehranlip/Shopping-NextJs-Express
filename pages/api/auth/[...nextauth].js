import NextAuth from "next-auth/next";


export default NextAuth({
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?._id) token._id === user._id

            if (user?.isAdmin) token.isAdmin === user.isAdmin

            return token
        },

        async session({ session, token }) {
            if (token?._id) session.user._id = token._id

            if (token?.isAdmin) session.user.isAdmin = token.isAdmin

            return token
        }
    }
})