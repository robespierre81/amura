import React, { FC } from 'react';
import { BaseEdge, EdgeLabelRenderer } from 'reactflow';

export default [
    {
        id: 'nanocapital-amuraholding', 
        source: 'nanocapital', 
        target: 'amuraholding', 
        animated: true,
        label: '15%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgrey',
            color: '#fff', 
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#333', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgrey',
        }
    },
    {
        id: 'crypto-amuraholding', 
        source: 'cryptocapital', 
        target: 'amuraholding', 
        animated: true, 
        label: '15%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgrey',
            color: '#fff', 
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#333', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgrey',
        }
    },
    {
        id: 'sigma-amuraholding', 
        source: 'sigmacapital', 
        target: 'amuraholding', 
        animated: true, 
        label: '20%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgrey',
            color: '#fff', 
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#333', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgrey',
        }
    },
    {
        id: 'alpha-amuraholding', 
        source: 'alphacapital', 
        target: 'amuraholding', 
        animated: true, 
        label: '20%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgrey',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#333', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgrey',
        }
    },
    
    {
        id: 'amuraholding-ai3crm', 
        source: 'amuraholding', 
        target: 'ai3crm', 
        sourceHandle: 'right',
        targetHandle: 'left',
        sourcePosition: 'right',
        targetPosition: 'left',
        animated: true, 
        label: '80%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkblue',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkblue',
        }
    },
    {
        id: 'amuraholding-blackboxwork', 
        source: 'amuraholding', 
        target: 'blackboxwork', 
    sourcePosition: 'left',
    sourceHandle: 'left',
        animated: true, 
        label: '25%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkblue',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkblue',
        }
    },
    
    
    {
        id: 'amuraholding-ai3startups', 
        source: 'amuraholding', 
        target: 'ai3startups', 
        animated: true, 
        label: '28%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgreen',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgreen',
        }
    },
    {
        id: 'amuraholding-ai3dev', 
        source: 'amuraholding', 
        target: 'ai3dev', 
        animated: true, 
        label: '82%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgreen',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgreen',
        }
    },
    {
        id: 'amuraholding-veritessa', 
        source: 'amuraholding', 
        target: 'veritessa', 
        animated: true, 
        label: '51%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgreen',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgreen',
        }
    },
    {
        id: 'amuraholding-viviluxa', 
        source: 'amuraholding', 
        target: 'viviluxa', 
        animated: true, 
        label: '30%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'darkgreen',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'darkgreen',
        }
    },
    
    
    {
        id: 'ai3startups-okietalkie', 
        source: 'ai3startups', 
        target: 'okietalkie', 
        animated: true, 
        label: '34%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'purple',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'purple',
        }
    },
    {
        id: 'ai3dev-okietalkie', 
        source: 'ai3dev', 
        target: 'okietalkie', 
        animated: true, 
        label: '15%',
        labelBgPadding: [15, 20],
        labelBgBorderRadius: 30,
        labelBgStyle: { 
            fill: 'purple',
        },
        labelStyle : {
            fontSize: '20px',
            fill: '#fff', 
        },
        style: {
            strokeWidth: 4,
            stroke: 'purple',
        }
    },
];
