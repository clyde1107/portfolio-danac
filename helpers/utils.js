

export const getCookieFromReq = (req, cookieKey) => {
    const cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookieKey}=`));

            // const cookies = req.headers.cookie;
            // console.log(cookies);
            // const splitedCookies = cookies.split(';');
            // console.log(splitedCookies);
            // const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
            // console.log(expiresAtCookie);
            // if (!expiresAtCookie) {return undefined};
            // const expiresAtArray = expiresAtCookie.split('=');
            // console.log(expiresAtArray);
            // const expiresAt = expiresAtArray[1];
            // console.log(expiresAt);

            if (!cookie) {return undefined};

            return cookie.split('=')[1];
}