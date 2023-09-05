
const checklist = {
    fmatrix: "OTHER",
    fmatrix_aa: "AA",
    fchoose: "OTHER"
}


export const LoginCheck = (_this) => {
    if (checklist[_this.$route.path] !== _this.$store.state.usertype) {
        if (_this.$store.state.usertype === 'OTHER') {
            _this.$router.push({
                path: '/layout/fmatrix'
            })
        } else if (_this.$store.state.usertype === 'DESIGNER') {
            _this.$router.push({
                path: '/layout/fchoose'
            })
        } else if (_this.$store.state.usertype === 'AA') {
            _this.$router.push({
                path: '/layout/fmatrix_aa'
            })
        }
    }

}