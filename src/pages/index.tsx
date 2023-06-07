import { FC } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom"
import { PATH } from "@/shared/constants/path"
import { PrivateRoutes } from "@/pages/PrivateRoutes"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import ProfilePage from "@/pages/ProfilePage"
import PacksPage from "@/pages/PacksPage"
import CardsPage from "@/pages/CardsPage"
import NewPasswordPage from "@/pages/NewPasswordPage"
import PasswordRecoveryPage from "@/pages/PasswordRecoveryPage"
import Error404 from "@/pages/Error404"
import LearnPage from "@/pages/LearnPage"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Navigate to={PATH.PACKS} />} />
        <Route path={PATH.PACKS} element={<PacksPage />} />
        <Route path={PATH.PROFILE} element={<ProfilePage />} />
        <Route path={PATH.CARDS} element={<CardsPage />} />
      </Route>
      <Route path={PATH.LOGIN} element={<LoginPage />} />
      <Route path={PATH.REGISTRATION} element={<RegisterPage />} />
      <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecoveryPage />} />
      <Route path={PATH.NEW_PASSWORD} element={<NewPasswordPage />} />
      <Route path={PATH.NAVIGATE_ERROR} element={<Error404 />} />
      <Route
        path={PATH.ERROR404}
        element={<Navigate to={PATH.NAVIGATE_ERROR} />}
      />
      <Route path={PATH.LEARN} element={<LearnPage />} />
    </>,
  ),
)

export const Pages: FC = () => {
  return <RouterProvider router={routes}></RouterProvider>
}
