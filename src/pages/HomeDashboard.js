import React from 'react';

function HomeDashboard({ onLogout }) {
  return (
    <div className="w-full max-w-5xl self-start mt-4">
      
      {/* DASHBOARD NAVBAR */}
      <header className="bg-[#3c3836] border border-[#504945] rounded-lg p-4 mb-6 flex justify-between items-center shadow-[4px_4px_0px_0px_#1d2021]">
        <div className="flex items-center gap-3">
          <span className="text-[#fabd2f] font-black text-xl tracking-tighter">[V]</span>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">THE VAULT CORE</h2>
            <p className="text-[9px] text-[#a89984] uppercase">Cluster Base Interface</p>
          </div>
        </div>
        <button onClick={onLogout} className="bg-[#1d2021] text-[#fb4934] border border-[#fb4934]/30 px-3 py-1.5 rounded text-xs uppercase tracking-wider font-bold hover:bg-[#fb4934] hover:text-white transition-all">
          Terminate Session
        </button>
      </header>

      {/* CORE GRID ARCHITECTURE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* COMPONENT MODULE A: PRIMARY INGESTION STAGE */}
        <div className="md:col-span-2 bg-[#282828] border border-[#3c3836] p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-[#3c3836] pb-2 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#a89984]">Transaction Stream Injector</h3>
              <span className="w-2 h-2 rounded-full bg-[#b8bb26]"></span>
            </div>
            <p className="text-xs text-[#a89984] mb-4">Use this terminal segment to compile structural JSON payloads to stream into the database clusters.</p>
            <textarea rows="5" placeholder='{\n  "payload_id": "tx_9921",\n  "cluster_node": "us-east-1"\n}' className="w-full bg-[#1d2021] border border-[#504945] rounded p-3 text-xs text-[#ebdbb2] placeholder:text-[#504945] outline-none focus:border-[#fabd2f] font-mono resize-none" />
          </div>
          <button className="w-full bg-[#8ec07c] text-[#282828] font-bold py-2 px-4 rounded text-xs uppercase tracking-wider border border-[#ebdbb2] mt-4 hover:bg-[#b8bb26] transition-all">
            Commit Payload Block
          </button>
        </div>

        {/* COMPONENT MODULE B: CONTROL PANEL CONFIGURATION */}
        <div className="bg-[#282828] border border-[#3c3836] p-5 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-[#3c3836] pb-2 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#a89984]">System Registry Controls</h3>
              <span className="px-1 py-0.5 bg-[#3c3836] text-[#fe8019] text-[8px] rounded font-bold">TUNER</span>
            </div>
            
            <div className="space-y-4 my-2">
              <div>
                <label className="block text-[10px] uppercase text-[#7c6f64] font-bold mb-1">Target Engine Hash</label>
                <input type="text" placeholder="UUID Node Node Hash" className="w-full bg-[#1d2021] border border-[#504945] rounded p-2 text-xs text-[#ebdbb2] placeholder:text-[#504945] outline-none focus:border-[#fe8019]" />
              </div>
              <div className="p-3 bg-[#1d2021] rounded border border-[#3c3836] text-center">
                <span className="text-[10px] text-[#7c6f64] block font-bold uppercase">Dynamic Shard Anchor</span>
                <span className="text-sm font-bold text-[#fe8019] tracking-wider uppercase">ClusterPool_M1</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#458588] text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wider border border-[#504945] mt-4 hover:bg-[#83a598] transition-all">
            Execute Node Shard Query
          </button>
        </div>

        {/* COMPONENT MODULE C: LARGE METRICS FRAME DISPLAY */}
        <div className="md:col-span-3 bg-[#1d2021] border border-[#3c3836] rounded-lg p-4 shadow-inner flex flex-col h-[240px]">
          <div className="border-b border-[#3c3836] pb-2 mb-3">
            <span className="text-xs text-[#a89984] font-bold uppercase tracking-wider">📦 Outbound Telemetry Matrix Payload / Response Analyzer</span>
          </div>
          <div className="overflow-auto flex-1 bg-[#282828] p-4 rounded border border-[#3c3836] text-xs text-[#7c6f64] leading-relaxed">
            {"{"}
            <br />
            &nbsp;&nbsp;"meta_status": "Idle",
            <br />
            &nbsp;&nbsp;"node_cluster_latency": "0.0ms",
            <br />
            &nbsp;&nbsp;"cache_layer_resolved": false,
            <br />
            &nbsp;&nbsp;"allocated_shards": []
            <br />
            {"}"}
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeDashboard;