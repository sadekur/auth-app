export const componentMap = {
  Alert: () => import("./Alert").then((m) => ({ default: m.Alert })),
  Avatar: () => import("./Avatar").then((m) => ({ default: m.Avatar })),
  Badge: () => import("./Badge").then((m) => ({ default: m.Badge })),
  Button: () => import("./Button").then((m) => ({ default: m.Button })),
  Card: () => import("./Card").then((m) => ({ default: m.Card })),
  Input: () => import("./Input").then((m) => ({ default: m.Input })),
  Spinner: () => import("./Spinner").then((m) => ({ default: m.Spinner })),
  ProtectedRoute: () => import("./ProtectedRoute").then((m) => ({ default: m.ProtectedRoute })),
};

export const lazyComponents = Object.keys(componentMap);

export const getComponent = (name) => {
  return componentMap[name]?.();
};