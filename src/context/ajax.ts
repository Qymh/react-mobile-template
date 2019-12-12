import React from 'react';
import { send } from '@/apis/ajax';

export const AjaxContext = React.createContext(send);
