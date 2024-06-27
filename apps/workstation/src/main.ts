/*
 Copyright 2024 Sarah Clark

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import express from 'express';
import * as path from 'path';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const assets = path.join(__dirname, '../public');

const app = express();
app.use(express.static(assets));

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
  console.log(`[ ready ] serving ${assets}`);
});

// Initial work: Core infrastructure
// TODO Add Ollama API
// TODO Add check to see if Ollama is connected
// TODO Add Langchain API
// TODO Add check to see if Langchain can communicate with Ollama
