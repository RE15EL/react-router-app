import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Root, loader as rootLoader, action as rootAction } from './routes/root';
import { ErrorPage } from './routes/error-page';
import Contact, { contactAction } from './routes/contact';
import { loader as contactLoader } from './routes/contact';
import EditContact, { action as editAction} from './routes/contact-edit';
import { deleteContactAction} from './routes/contact-delete';
import Index from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children:[
          {
          index: true, 
          element: <Index />,
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction
          },
          {
            path: "/contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: <h4>Oops! There was an error.</h4>
          },
        ]
      }
    ]
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
