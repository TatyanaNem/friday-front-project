import { FC } from "react"
import { useAppSelector } from "@/app/hooks"
import { Navigate, Outlet } from "react-router-dom"
import { PATH } from "@/shared/constants/path"

export const PrivateRoutes: FC = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isAuth)

  return isLoggedIn ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
