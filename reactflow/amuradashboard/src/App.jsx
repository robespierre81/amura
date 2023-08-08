import React, { useState, useCallback } from 'react';
import ReactFlow, { 
    Controls, 
    Background, 
    Handle,
    Position, 
    MiniMap, 
    useEdgesState,
    useNodesState,
    applyEdgeChanges,
    applyNodeChanges} from 'reactflow';
import 'reactflow/dist/style.css';

import initialNodes from './nodes.jsx';
import initialEdges from './edges.jsx';


function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

  return (
    <div style={{ height: 1000, width: 2000 }}>
      <ReactFlow 
        nodes={nodes} 
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
      fitView
        >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default App;
