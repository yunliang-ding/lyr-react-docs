import { MarkdownViewer } from 'lyr-extra';
import User from '../../docs/user.md';
import Goodbod from '../../docs/good-bod.md';

export default [
  {
    "path": "/user",
    "component": <MarkdownViewer content={User} />
  },
  {
    "path": "/good-bod",
    "component": <MarkdownViewer content={Goodbod} />
  },
]